import Sidebar from '../component/sidebar';
import '../css/FAQPage.css';

const FAQPage = () => {
  const faqItems = [
    {
      question: 'Chứng minh nội dung là gì?',
      answer:
        'Chứng minh nội dung là văn bản có hiệu lực của văn bản chính thức, có hiệu lực gây áp lực lên đối phương thực hiện nghĩa vụ nợ.',
    },
    {
      question: 'Bạn có thể tin tưởng vào việc tự động viết chứng minh nội dung không?',
      answer:
        'Đây là dịch vụ do luật sư trực tiếp làm, nếu trả lời các câu hỏi sẽ được lập chứng minh nội dung phù hợp với luật pháp.',
    },
    {
      question: 'Tôi phải gửi chứng minh nội dung như thế nào?',
      answer:
        'Bạn phải đến bưu điện để chuyển phát hoặc gửi đi bằng điện tử.\n' +
        'Nếu bạn muốn nhận sự giúp đỡ trong việc gửi, vui lòng đăng ký tại balaw.dhlaw@gmail.com .',
    },
    {
      question: 'Làm thế nào để sử dụng cộng đồng?',
      answer:
        'Hãy để lại những câu hỏi thắc mắc bằng ngôn ngữ thoải mái (Hàn Quốc, Trung Quốc, Việt Nam), luật sư sẽ trả lời đúng theo ngôn ngữ.',
    },
  ];
  return (
    <div className="faq-page">
      <Sidebar />
      <div className="content">
        {faqItems.map((item, index) => (
          <div key={index} className="faq-item">
            <div className="question">Q. {item.question}</div>
            <div className="answer">A. {item.answer}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;
