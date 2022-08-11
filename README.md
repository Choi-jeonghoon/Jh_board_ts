# BoradAPI

## 사용 기술스택

### JavaScript

### Express

### mysqlDB

## 실행방법

### 1.해당 레포지토리를 clone합니다.

```shell
git clone https://github.com/Choi-jeonghoon/JH_board_ts
```

### 2. 다운 받으신 폴더로 들어갑니다

```shell
cd JH_board_ts
```

### 3. 의존성들을 설치합니다.

```shell
npm i
```

### 4. Swagger 문서를 build합니다

```shell
npm run api-docs
```

### 5. 실행시킵니다!

```shell
npm start
```

## API 명세서

```shell
http://localhost:10010/api-docs/
```

에서 확인하실수 있습니다.

<img width="1243" alt="스크린샷 2022-08-05 오후 4 34 12" src="https://user-images.githubusercontent.com/68211978/183027076-77d2740e-a4e1-4de9-9fb8-c4791f08ce1d.png">

- Justcode 기업 과제 내용 포함
- 해당 프로젝트는 [링크]https://community.wecode.co.kr/ 의 프로젝트 기반으로 만들었습니다.
- 게시글 카테고리가 있습니다.

- 게시글 검색 기능이 있습니다.
  - 게시글에서 특정 키워드를 검색하면, 게시글 제목, 게시글 본문, 게시글 댓글, 게시글 작성자 이름 에서 모두 검색하여, 해당 게시물을 표출합니다.
  - ex) `노드` 를 검색
- 대댓글(1 depth)
  - 댓글에는 대댓글을 달 수 있습니다.
  - 1 depth는 필수이지만, 2, 3중으로 대댓글을 계속해서 추가할 수 있다면 가산점이 있습니다.
  - 댓글/대댓글 pagination
- 게시글 읽힘 수
  - 같은 User가 게시글을 읽는 경우 count 수 증가하면 안 됩니다.
- Restful API 규칙에 따라 설계합니다.
- Unit Test 를 추가합니다.
- 1000만건 이상의 데이터를 넣고 성능테스트 진행 결과 필요합니다.

# 기능 설명

## 개발 요구사항에 대한 성공여부

- 게시글 검색 기능이 설계하였습니다.
- 댓글에는 대댓글을 달 수 있도록 설계하였습니다.(2중 3중으로 대댓글을 추가할수있습니다.)
- 같은 User가 게시글을 읽는 경우 count 수 증가되지 않도록 설계하였습니다.
- Rest API 설계

  - Rest API를 이용하여 설계하였습니다.

- Unit Test
  - Unit Test는 진행하지 못했습니다.
- 1000만건 이상의 데이터를 넣고 성능테스트 진행 못했습니다.
