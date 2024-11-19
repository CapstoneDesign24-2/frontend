import React, { useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import '../../css/ProofResult.css';

//서버에서 받을 데이터 예시
const data = {
  sender: {
    name: '응우옌',
    address: '경기도 용인시 처인구 모현읍 외대로 81 E동 427호',
    phone: '010-1234-5678',
  },
  receiver: {
    name: '이상윤',
    address: '울산광역시 남구 산업로 613번길 26 104동 2102호',
    phone: '010-5293-9120',
  },
  subject: '임대차 계약 종료 및 보증금 반환 요청',
  content:
    "1. 귀하(수신인, 이하 '귀하'라고 한다)의 무궁한 발전을 기원합니다.\n\n" +
    '2. 본 발신인은 귀하와 아래와 같이 임대차계약을 체결하였으며, 이에 귀하는 본 발신인에게 임대차 보증금 반환 의무가 있는바, 이에 대한 이행을 촉구합니다.\n\n' +
    '가. 본 발신인은 귀하와 2023년 11월 13일 경기도 용인시 처인구 모현읍 외대로 81 E동 427호 (17035)에 관하여, 임대차 보증금 100,000,000원으로 하는 임대차계약을 체결하였습니다.\n\n' +
    '나. 이에 본 발신인은 본 임대차계약을 갱신하지 않고자 하는바 귀하는 본 발신인에게 본 임대차 계약의 종료 시 임대차 보증금 100,000,000원을 반환할 의무가 있다고 할것입니다.\n\n' +
    '3. 본 발신인은 귀하가 2024년 11월 14일 까지 본 발신인에게 임대차 보증금을 반환할 것을 촉구하며 이를 이행하지 않을 때는 본 발신인은 귀하의 재산에 대하여 민사집행법 제276조 이하 등에 따른 가압류 등 보전 처분 및 임차권등기명령, 민사소송법 등에 따른 보증금반환 청구 소송 등의 법적 조치를 할 것을 엄중히 경고합니다.\n\n' +
    '이 경우, 귀하는 임대차 보증금 반환 의무에 따른 원금, 이자 및 지연 손해금은 물론, 소송비용까지 귀하가 부담하게 될 것입니다.\n\n' +
    '게다가 본 발신인이 소송을 제기하면 지연손해금은 소송촉진 등에 관한 특례법 제3조 제1항 본문의 법정이율에 관한 규정에 따라 연 12%가 될 것입니다.\n\n' +
    '4. 본 발신인이 귀하에게 위와 같은 법적 조치를 취하기 전에 귀하는 기한 내에 귀하의 명백한 임대차 보증금 반환 의무를 이행하여 본 건을 원만하게 해결하시기를 마지막으로 말씀드립니다.',
  date: '2024년 11월 14일',
};

const ProofResult = () => {
  const contentRef = useRef(null);

  const downloadAsPDF = async () => {
    try {
      if (!contentRef.current) {
        throw new Error('문서 요소를 찾을 수 없습니다.');
      }

      const margin = 7;
      const canvas = await html2canvas(contentRef.current, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff',
      });

      const pdfWidth = 210;
      const pdfHeight = 297;
      const imgWidth = pdfWidth - margin * 2;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      const pdf = new jsPDF({
        orientation: imgHeight > pdfHeight ? 'portrait' : 'portrait',
        unit: 'mm',
        format: 'a4',
      });

      const imgData = canvas.toDataURL('image/png', 1.0);
      pdf.addImage(imgData, 'PNG', margin, margin, imgWidth, imgHeight);

      pdf.save(`내용증명서_${new Date().toLocaleDateString()}.pdf`);
    } catch (error) {
      console.error('PDF 생성 중 오류 발생:', error);
      alert(`PDF 생성 중 오류가 발생했습니다: ${error.message}`);
    }
  };

  return (
    <div className="proof-result">
      <div className="proof-paper" ref={contentRef}>
        <h1 className="title">내용 증명</h1>

        <table className="info-table">
          <tbody>
            <tr>
              <td rowSpan="2" className="person-type" style={{ borderBottom: 0 }}>
                발신인
              </td>
              <td className="label">성명</td>
              <td className="value">{data?.sender?.name || ''}</td>
              <td className="label">연락처</td>
              <td className="value">{data?.sender?.phone || ''}</td>
            </tr>
            <tr className="second-info-table">
              <td className="label ">주소</td>
              <td className="value address" colSpan="3">
                {data?.sender?.address || ''}
              </td>
            </tr>
          </tbody>

          <tbody>
            <tr>
              <td rowSpan="2" className="person-type">
                수신인
              </td>
              <td className="label">성명</td>
              <td className="value">{data?.receiver?.name || ''}</td>
              <td className="label">연락처</td>
              <td className="value">{data?.receiver?.phone || ''}</td>
            </tr>
            <tr>
              <td className="label">주소</td>
              <td className="value address" colSpan="3">
                {data?.receiver?.address || ''}
              </td>
            </tr>
          </tbody>
        </table>

        <table className="subject-table">
          <tbody>
            <tr>
              <td className="person-type">제목</td>
              <td className="value">{data?.subject || ''}</td>
            </tr>
          </tbody>
        </table>

        <div className="content-section">
          <div className="content-label">내용</div>
          <div className="content-box">{data?.content || ''}</div>
        </div>

        <div className="date-section">
          <div className="date-label">작성일자</div>
          <div className="date-value">{data?.date || new Date().toLocaleDateString('ko-KR')}</div>
        </div>
      </div>

      <div className="download-section">
        <button onClick={downloadAsPDF} className="download-button">
          PDF 다운로드
        </button>
      </div>
    </div>
  );
};

export default ProofResult;
