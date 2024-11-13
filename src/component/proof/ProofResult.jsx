import React, { useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import '../../css/ProofResult.css';

//서버에서 받을 데이터 예시
const data = {
  sender: {
    name: '마동석',
    address: '경기도 용인시',
    phone: '010-1234-5678',
  },
  receiver: {
    name: '배고파',
    address: '대구광역시 수성구 수성로',
    phone: '010-1234-5678',
  },
  subject: '계약 불이행에 대한 조치 통보',
  content:
    "1. 귀하(수신인, 이하 '귀하'라고 한다)의 무권한 발전을 가정합니다.\n2. 본 발신인은 2024년 11월 10일자 기준하 --",
  date: '2024년 11월 11일',
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
