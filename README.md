#  Platzi Fake Store Api를 이용한 쇼핑몰 어플

### 기간 
22.05.27 ~ 22.06.04   

### 기술 스택   
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black">
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white">
<img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=Sass&logoColor=white">   
<img src="https://img.shields.io/badge/React Query-FF4154?style=for-the-badge&logo=React Query&logoColor=white">   


### 기능
- 상품 목록 조회   
  * 카테고리별 상품 목록 조회   
  * 무한 스크롤로 상품 목록 추가 조회 가능
- 장바구니 기능   
  * 장바구니 수량 조절, 삭제 기능   


### 폴더 구조

````
├─assets
│  └─svgs
├─components
│  ├─ItemList
│  │  └─ListItem
│  ├─Layout
│  └─Spinner
├─hooks
│  ├─state
│  └─worker
├─recoil
├─routes
│  ├─Cart
│  ├─Dummy
│  ├─NotFound
│  └─_shared
│      └─GNB
├─services
├─styles
│  ├─base
│  ├─constants
│  └─mixins
├─types
└─utils
````   

### 라이브러리   
- recoil : 전역 상태 관리
- react-hot-toast : api 에러 발생 시, 장바구니에 상품 추가시 toast 메세지 호출   
- classnames : 조건부 클래스 네임 설정   
- react-intersection-observer : infinite scroll 구현
- store : sessionStorage를 이용한 장바구니 기능    


### 기능 상세   
![mainPage](https://user-images.githubusercontent.com/88841429/171993969-f7258b96-a9ac-42a7-8233-d6246bbe7cd2.gif)   

css의 background-attachment를 이용해서 배경 스크롤 효과를 구현했습니다


![infinite Scroll](https://user-images.githubusercontent.com/88841429/171993970-c0d55843-f0bd-44f5-aecb-7e7877fa79ee.gif)   

react-intersection-observer와 react-query의 useInfiniteQuery의 기능을 이용하여, ref를 걸어놓은 부분이 화면에 들어올 경우, 다음 페이지를 부르도록 무한 스크롤을 구현하였습니다.     


![cartAdd](https://user-images.githubusercontent.com/88841429/171993972-cc514897-0d56-451a-8ecb-d7a26de9cf90.gif)   
 
store에 sessionStorage engine을 추가하여, 장바구니에 추가한 목록을 sessionStorage에 추가하고, 이것을 cart페이지에서 조회할 수 있도록 하였습니다. 장바구니에 추가된 경우 toast 메세지를 띄울 수 있도록 하였습니다. 창을 닫으면 장바구니 목록이 초기화됩니다.   


![cart](https://user-images.githubusercontent.com/88841429/171993973-f82d2017-6a2e-48b6-85eb-becbb2830406.gif)
장바구니에서 수량 조절을 할 수 있게 하였고, 삭제버튼을 누를 경우 체크된 상품을 삭제하고, 다시 sessionStorage에 저장하도록 하였습니다.

### 아쉬운 점 및 추후 수정하고 싶은 점   
 디자인 감각이 많이 부족하다는 것을 다시 한번 느꼈고, netlify 오류를 다루는데 시간이 많이 걸려서 디테일한 부분을 다듬지 못한 것이 아쉽습니다. 이 후에 디자인 및 색감을 통일하고 페이지 이동을 좀 더 원활하게 만들고 싶습니다.   


