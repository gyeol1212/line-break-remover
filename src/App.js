import {useState} from "react";
import './App.css';

function App() {
  const [value, setValue] = useState('')

  function handleChange(e) {
    setValue(e.target.value)
  }

  function removeLineBreak(v) {
    let target = v;
    target = target.split('\n').join(' ')
    target = target.split('- ').join('')

    return target
  }


    function handleCopy() {
      const target = removeLineBreak(value)

      // textarea 생성
      const textArea = document.createElement('textarea');
      // textarea 추가
      document.body.appendChild(textArea);
      // textara의 value값으로 div내부 텍스트값 설정
      textArea.value = target;
      // textarea 선택 및 복사
      textArea.select(); document.execCommand('copy');
      // textarea 제거
      document.body.removeChild(textArea);
    }

  function deleteText() {
    setValue('')
  }

  return (
    <div className="App">
      <div className='title-wrap'>

      <p className='title'>변환 대상</p>
      <button className='delete-button' onClick={deleteText}>전체 삭제</button>
      </div>
      <textarea className='input' value={value} onChange={handleChange} placeholder='텍스트를 입력해주세요.' />
      <p className='title'>
          변환 결과<span>텍스트를 클릭하면 복사할 수 있습니다.</span>
      </p>
      <div className='result' onClick={handleCopy}>{removeLineBreak(value)}</div>
    </div>
  );
}

export default App;
