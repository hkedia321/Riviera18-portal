import React from 'react'
import {Row,Col} from 'react-flexbox-grid'
import {Link} from 'react-router-dom'
import FontAwesome from 'react-fontawesome'

class Footer extends React.Component {
  render(){
    return(
      <footer>
        <Row>
          <Col sm={8} xs={12}>
            <h1 style={{paddingLeft:'20px'}}>Stay Connected & Excited</h1>
            <h4 style={{position:'relative',top:'-10px',paddingLeft:'20px'}}>#riviera18</h4>
            <h4>
              <a href='https://www.facebook.com/rivieraVITUniversity/'><FontAwesome name='facebook' style={{paddingLeft:'20px',fontSize:'24px',color:'#fff'}}/></a>
              <a href='https://www.instagram.com/rivieraVITUniversity/'><FontAwesome name='instagram' style={{paddingLeft:'20px',fontSize:'24px'}}/></a>
              {/* <a href='https://www.instagram.com/rivieraVITUniversity/'><img src='/instagram.png' style={{width:'50px'}}/></a> */}
            </h4>
          </Col>
          <Col sm={4} xs={12}>
            <Row>
              <Col xs={12} style={{padding:'10px'}}>
                <Link to='/sponsors'>View Sponsors</Link><br/>
              </Col>
              {/* <Col xs={12} style={{padding:'10px'}}>
                <Link to='/team'>Riviera Team</Link><br/>
              </Col> */}
              <Col xs={12} style={{padding:'10px'}}>
                {/* <Link to='/highlights'>Riviera '17 Highlights</Link><br/> */}
              </Col>
              <Col xs={12} style={{padding:'10px'}}>
                  <a href='https://vtop9.vit.ac.in/riviera/'><button>Register Now</button></a>
              </Col>
            </Row>
          </Col>
        </Row>
      </footer>
    )
  }
}

export default Footer