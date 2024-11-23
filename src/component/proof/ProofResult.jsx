import React, { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import axios from 'axios';
import '../../css/ProofResult.css';

const ProofResult = ({ data }) => {
  const contentRef = useRef(null);
  const [translatedData, setTranslatedData] = useState(null); // 번역 데이터 상태
  const [loading, setLoading] = useState(false); // 로딩 상태
  const [showTranslation, setShowTranslation] = useState(false); // 번역된 내용을 보여줄지 여부

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
      alert(`Có lỗi trong khi tạo PDF: ${error.message}`);
    }
  };

  const handleTranslate = async () => {
    setLoading(true);
    try {
      const response = await axios.post('http://13.239.192.116:5000/translate', {
        content: data.content,
        subject: data.subject,
      });
      setTranslatedData(response.data);
      setShowTranslation(true);
    } catch (error) {
      console.error('번역 요청 중 오류 발생:', error);
      alert('Đã phát sinh vấn đề khi yêu cầu dịch thuật.');
    } finally {
      setLoading(false); // 로딩 상태 종료
    }
  };

  return (
    <div className="proof-result">
      {loading && (
        <div className="spinner-overlay">
          <div className="spinner"></div>
        </div>
      )}
      <div className="proof-paper" ref={contentRef}>
        <h1 className="title">{showTranslation ? translatedData?.t_subject : data?.subject || ''}</h1>

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
              <td className="value">{showTranslation ? translatedData?.t_subject : data?.subject || ''}</td>
            </tr>
          </tbody>
        </table>

        <div className="content-section">
          <div className="content-label">내용</div>
          <div className="content-box">
            {(showTranslation ? translatedData?.t_content : data?.content || []).map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
        </div>

        <div className="date-section">
          <div className="date-label">작성일자</div>
          <div className="date-value">{data?.date || new Date().toLocaleDateString('ko-KR')}</div>
        </div>
      </div>

      <div className="button-section">
        <button onClick={downloadAsPDF} className="download-button">
          Download PDF
        </button>
        <button
          onClick={() => {
            if (!translatedData) handleTranslate();
            else setShowTranslation((prev) => !prev);
          }}
          className="translate-button"
        >
          {showTranslation ? 'Show Original' : 'Show Translation'}
        </button>
      </div>
    </div>
  );
};

export default ProofResult;
