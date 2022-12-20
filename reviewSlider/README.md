목적:

바닐라 스크립트로 카드 데이터들을 렌더링해준다. 데이터 오브젝트에는 content, subTitle,image 가 있고 페이지에 따라 다른 데이터들을 보여준다.

배운점:
처음 데이터들을 사용할때 html 에 정적으로 처음 데이터들을 입력하였는데, window.addEventListener를 사용해서 첫번째 데이터들을 가져와서 렌더링 할 수 있도록 하였다.

모든 버튼 클레스들을 가져와서 forEach로 한번에 이벤트를 걸어주었고
e.currentTarget.classList 로 변수를 설정해주고 contains 로 className 이 있는거 확인후 해당 버튼이 어떤 버튼인지 구변한다.

바닐라 자바스크립트는 이벤트가 발생할때 리렌더링이 발생하는데 리렌더링 되어야 하는 부분 고려하기.