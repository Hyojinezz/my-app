import React, {useState} from 'react'
import { Container, Col, Row, Form, Button } from 'react-bootstrap';
import '../Login.css';
import logo from '../images/logo.png';

const Login = () => {
  // 로그인 폼 필드의 상태
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // 로그인 버튼을 클릭했을 때 실행되는 함수
  const handleLogin = () => {
    // 실제 로그인 로직을 이 부분에 구현
    if (username === 'user' && password === 'password') {
      alert('로그인 성공!');
    } else {
      alert('로그인 실패. 아이디와 비밀번호를 확인하세요.');
    }
  };

  return (
    <Container className="login-container" style={{ overflowY: 'auto', height: '110vh' }}>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
        <div className="text-center">
  <img
    src={ logo }
    alt="로고"
    width="100" // 이미지 가로 크기 조절
    height="100" // 이미지 세로 크기 조절
    className="mb-4 mt-4" // 이미지 아래에 간격을 추가합니다
  /></div>
          <div className="login-form">
            <h3 className="mb-3">BYCP에 오신것을 환영합니다.</h3>
            <h6>BYCP는 부산광역시 청년층의 취업을 위한 맞춤형 구직상담 서비스를 제공합니다.</h6>
            <hr style={{ margin: '6rem 0' }} /> {/* 가로 선 추가 및 큰 마진 설정 */}
            <Form>
              <Form.Group controlId="formBasicUsername">
                <Form.Label>ID</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="아이디를 입력하세요"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="비밀번호를 입력하세요"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>

              <Button variant="primary" type="button" onClick={handleLogin}>
                Log In
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
  }

export default Login