// ExplanationScreen2.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ExplanationScreen2.css';

function ExplanationScreen2() {
    const navigate = useNavigate();

    // "다음으로" 버튼 클릭 시 ExplanationScreen3로 이동
    const handleNextClick = () => {
        navigate('/explanation-3');
    };
    const handleSkipClick = ()=>{
        navigate('/user-limit-2');
    }

    return (
        <div className="explanation-container">
            <h1 className="logo-text">쿠잇나우 로고</h1>
            <h2 className="explanation-title">메뉴 추천</h2>
            <p className="explanation-description">
                쿠잇과의 대화를 통해 지금 딱 먹고 싶은 음식을 골라보세요!
            </p>
            {/* 이미지 영역 */}
            <div className="image-container">
                <img src="/explanation2.jpg" alt="메뉴 추천 이미지" className="explanation-image" />
            </div>
            {/* 스텝 인디케이터 */}
            <div className="footer">
                <div className="step-indicator">
                    <div className="dot"></div>
                    <div className="dot active"></div> {/* 두 번째 동그라미만 활성화 */}
                    <div className="dot"></div>
                </div>
                <button className="next-button" onClick={handleNextClick}>
                    다음으로
                </button>
                <button className="skip-button" onClick={handleSkipClick}>건너뛰기</button>
            </div>
        </div>
    );
}

export default ExplanationScreen2;
