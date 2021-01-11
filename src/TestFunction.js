const TestFunction = (props) => {
  const choose = false
  const response1 = "LiGonSanXaioLa!"
  const response2 = "BechiOGan!"
  const response3 = "↓'Click' to add Products.↓"
  const styleArgument = { fontSize: "30px", color: "darkred" }


  {/*以下為Button的函式名稱設定*/ }
  var output = []
  const getValue = (event) => {
    let val = event.target.value
    if (val == 1) console.log('One')
    else if (val == 2) console.log('Two')
    else if (val == 3) console.log('Three')
    else if (val == 4) console.log('Four')
    else console.log(val)
  }

  {/*以下為Button的迴圈(數量、名稱)設定*/ }
  for (var i = 1; i < 5; i++)
    output.push(<><br /><button value={i} onClick={getValue}>Products{i}</button><br /></>)

  /*以下有數個標籤，用<> </>來避免only*/
  return (
    <>
      <h1 style={styleArgument}>{props.name}</h1>
      <button onClick={props.handleClick}>Do not click me!</button>
      <p style={{ fontSize: 30, color: "blue" }} id="show-area">BuYaoN@@</p>
      <h1 >{(choose == true) ? 6666666 : 8794087940}</h1>
      <h2 style={styleArgument}>{response1}</h2>
      <h2 style={{ fontSize: "30px", color: "skyblue" }}>{props.children}</h2>
      <h3 style={{ fontSize: "20px", color: "pink" }}>{props.change}</h3>
      <h3 style={{ fontSize: "20px", color: "darkgreen" }}>{response3}</h3>

      {/*數個建立之Button*/}
      {output}
    </>
  )
}

export default TestFunction
