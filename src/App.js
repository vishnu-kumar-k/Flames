import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';
import { useState } from 'react';
function App() {
  const [f_name, changehis] = useState("");
  const [s_name, changeher] = useState("");

  const [t, changeflames] = useState("");
  var image="";
  var ans = "";
  const reset = (event) => {
    changehis("");
    changeher("");
    changeflames("");

  }
  const handle = (event) => {
    event.preventDefault();
    var r1 = f_name.toLowerCase();
    var r2 = s_name.toLowerCase();
    r1 = r1.replace(/\s+/g, '');
    r2 = r2.replace(/\s+/g, '');
    var count = 0;
    var len1 = r1.length;
    var len2 = r2.length;
    for (var i = 0; i < len1; i++)
    {
      for (var j = 0; j <r2.length; j++)
      {
        if (r1[i] === r2[j])
        {
          count = count + 1;
         r2= r2.replace(r2[j], "");
          break;
          
          }
        }
      }
    var total = r2.length + len1 - count;
    
    var f = "flames";
    var c = 0;
    var a = 1, k = 0;
    if (total === 0) {
      changeflames("Your relationship is  Friend");
      
    }
    else {
      while(true)
      {
        for (i = 0; i < 6; i++)
        {
          if (f[i] === "$")
          {
            
            continue;
          }
          c = c + 1;
          
          if (c % total === 0)
          {
            
          
            a = f[i];
            k = k + 1;
            f = f.replace(f[i], "$");
            
          
          }
        
        
        }
        if (k == 6)
        {
          
          break;
          }
      
        
      }
      if (a === 'm')
      {
        changeflames("Your relationship is Marriage")
              }
      else if (a === "f")
      {
        changeflames("Your relationship is Friend")
        
      }
      else if (a === 's')
      {
        changeflames("Your relationship is Sibilings")
      }
      else if (a === "l")
      {
        changeflames("Your relationship is Lover")
        
      }
      else if (a === 'a')
      {
        changeflames("Your relationship is Affection")
        
      }
      else if (a === "e")
      {
        changeflames("Your relationship is Enemy")
        
        }
    }

    
  }
  return (
    <><div className='full'>
      <div className='menu'>
        <h1>FLAMES CALCULATOR</h1>
        </div><br />
      <Container >
        <Row>
          <Col xs={3}></Col>
          <Col xs={6}>
        <div className="App">
          <p>F-FRIENDS</p>
          <p>L-LOVE</p>
          <p>A-Affection</p>
          <p>M-Marriage</p>
          <p>E-Enemy</p>
          <p>S-Sibling</p>
          
            </div>
          </Col>
          <Col xs={3}></Col>
        </Row>
      </Container>
      <br />
      <br />
      <div className='forms'>
        <form onSubmit={handle}><label>Enter Your Name:</label><br />
          <input type='text' name='name' onChange={(e) => changehis(e.target.value)} required/><br />
          <label>Enter His/Her Name:</label><br />
          <input type='text' name="name" onChange={(e) => changeher(e.target.value)} required/><br /><br />
          <input className="btn btn-outline-danger" style={{ marginRight:20+"px" }} type="submit" value="Calculate Flames" />
          <input className="btn btn-outline-primary" type="reset" value="Reset" onClick={reset} />
        </form>
        <br />
        <p>{t}</p>
        <br />
          
      </div>

      




      
        
      <div className='home'>
        <Container>
          
          
        <h1>FLAMES CALCULATOR</h1>
        <h3>FIND MEANING OF CONNECTION WITH YOUR SOULMATE</h3>
        <h4>Find your partner relationship with you. What type of relationship might be with you.

            Love Calculator is a really super-duper funny approach to find the connection with your partner.
            All people's names have really some decent meaning the ultimate Love Calculator helps you to find compatibility of your love with your partner.</h4>
      <br />
        </Container>
        </div>
    </div>
    </>
  );
}

export default App;



