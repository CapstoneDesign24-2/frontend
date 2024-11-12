import Sidebar from '../component/sidebar';
import '../css/FAQPage.css';

const FAQPage = () => {
  const faqItems = [
    {
      question: '언어 변경은 어떻게 하나요?',
      answer: '오른쪽 상단 화살표를 누르시면 KOR / 中国人/ Việt 중에 언어를 선택하실 수 있습니다.',
    },
    {
      question: '저녁 뭐 먹을까요...',
      answer: '오른쪽 상단 화살표를 누르시면 KOR / 中国人/ Việt 중에 언어를 선택하실 수 있습니다.',
    },
    {
      question: '..',
      answer: '오른쪽 상단 화살표를 누르시면 KOR / 中国人/ Việt 중에 언어를 선택하실 수 있습니다.',
    },
    {
      question: '10개 보이게 할까요?',
      answer: '오른쪽 상단 화살표를 누르시면 KOR / 中国人/ Việt 중에 언어를 선택하실 수 있습니다.',
    },
    {
      question: '심플한 걸 좋아해서 심플하게 하고 있는데 너무 심플해서 미쳐버릴 것 같아요.',
      answer: '오른쪽 상단 화살표를 누르시면 KOR / 中国人/ Việt 중에 언어를 선택하실 수 있습니다.',
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
