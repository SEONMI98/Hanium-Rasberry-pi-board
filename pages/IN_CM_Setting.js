import React,{Component} from 'react'
import { Button, 
         Image,
         Dropdown,
         Segment,
         Menu,
         Container,
         Grid, Card, Popup, Input, Divider,Header, Label, Confirm
         } from 'semantic-ui-react'

const img_dachshund  ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDwXkyOJVwl9tEuVj9Py2FGPK12pB3KCCmRR8l9582h-kjgZVrKQ'

class App extends Component {
    state = { open: false }
  
    open = () => this.setState({ open: true })
    close = () => this.setState({ open: false })
    render() {

const options = [
    { key: 1, text: '15초', value: 1 },
    { key: 2, text: '25초', value: 2 },
    { key: 3, text: '35초', value: 3 },
    { key: 4, text: '1분', value: 4 },
  ]

return (
    <div>
    <Menu fixed='top' inverted>
      <Container>
        <Menu.Item as='a' header>
          <Image size='mini' src={img_dachshund} circular style={{ marginRight: '1.5em' }} />
            Dachshund
        </Menu.Item>
      
            <Dropdown text='Board' simple item as='a'>
                  <Dropdown.Menu>
                    <Dropdown.Item text='등록된 게시판' href='http://localhost:3000/IN_BM_Board_DM'/>
                    <Dropdown.Item text='승인 대기' href='http://localhost:3000/IN_BM_Board_WaitList'/>
                  </Dropdown.Menu>
                </Dropdown>  

                <Dropdown text='Contents' simple item as='a'>
                  <Dropdown.Menu>
                    <Dropdown.Item text='기본 설정' href='http://localhost:3000/IN_CM_Setting'/>
                    <Dropdown.Item text='컨텐츠 관리' href='http://localhost:3000/IN_CM_Boards'/>
                    <Dropdown.Item text='컨텐츠 등록' href='http://localhost:3000/IN_CM_Upload_Md'/>
                  </Dropdown.Menu>
                </Dropdown>
         <Menu.Item position='right'>
          <Button as='a' inverted>
            Log out
          </Button>
        </Menu.Item>
       </Container>
    </Menu>
     <Segment style={{background: '#FAFAFA'}}>
     <br/><br/>
     <Container centered style={{ marginTop: '8em'}}>
     </Container>

     <Header textAlign='center'>
    {//이미지 삽입 위해서는 아직 local 저장소에서는 모르겠고, 웹 링크 타고는 가능!>이미지 선택>새탭에서 열기>링크 복사
    }
    <Header size='Huge'>
    <Image circular src={img_dachshund} /> 
      Dachshund Digital Board
      <Header.Subheader size = 'medium' >반복주기 설정</Header.Subheader>
      </Header>
      
      <Segment color='yellow' >
      
      <Label color='teal' size='large' > 텍스트 </Label>
       <Dropdown selection options={options} placeholder='Choose an option' />
       <br/>
       <br/>
       <Label color='yellow'  size='large' > 이미지 </Label>
       <Dropdown selection options={options} placeholder='Choose an option' />
       <br/>
       <br/>
       <Label color= 'purple'  size='large'> 동영상 </Label>
       <Dropdown selection options={options} placeholder='Choose an option' />
       <br/>
       <br/> 
       <div>
        <Button onClick={this.open}>확인</Button>
        <Confirm open={this.state.open} onConfirm={this.close} onCancel={this.close} 
         content='설정이 완료되었습니다.'
          />
      </div>
      
      </Segment>
       </Header>
       <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
  </Segment>
  
  </div>

)
    }
}

export default App