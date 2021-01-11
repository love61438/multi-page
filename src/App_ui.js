import React, { Component } from "react"
import { makeStyles, withStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import FilledInput from "@material-ui/core/FilledInput"
import FormControl from "@material-ui/core/FormControl"
import FormHelperText from "@material-ui/core/FormHelperText"
import Input from "@material-ui/core/Input"
import InputLabel from "@material-ui/core/InputLabel"
import OutlinedInput from "@material-ui/core/OutlinedInput"
import Radio from "@material-ui/core/Radio"
import RadioGroup from "@material-ui/core/RadioGroup"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import FormLabel from "@material-ui/core/FormLabel"

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}))

//export default function App () {
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {
        stu_id: "",
        name: "",
        gender: "",
        chi: "",
        eng: "",
        math: "",
      },
      name: "TextField",
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleName = this.handleName.bind(this)
    this.handleQuery = this.handleQuery.bind(this)
    this.handleIns = this.handleIns.bind(this)
    this.handleMod = this.handleMod.bind(this)
    this.handleDel = this.handleDel.bind(this)
  }
  handleQuery () {
    const parm = { stu_id: this.state.data["stu_id"] }
    fetch("http://localhost/sql_proc.php?f=query", {
      method: "POST",
      body: JSON.stringify(parm),
      headers: new Headers(),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if (data["status"] == "fail") {
          alert("Can not find")
          this.setState({
            data: {
              stu_id: "",
              gender: 0,
              name: "",
              chi: "",
              eng: "",
              math: "",
            },
          })
        } else this.setState({ data: data })
      })
      .catch((e) => {
        console.log(e)
      })
  }
  handleIns () {
    fetch("http://localhost/sql_proc.php?f=ins", {
      method: "POST",
      body: JSON.stringify(this.state.data),
      headers: new Headers(),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if (data["status"] == "fail") {
          alert(data["msg"])
        } else alert("新增成功")
      })
      .catch((e) => {
        console.log(e)
      })
  }
  handleMod () {
    fetch("http://localhost/sql_proc.php?f=mod", {
      method: "POST",
      body: JSON.stringify(this.state.data),
      headers: new Headers(),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if (data["status"] == "fail") {
          alert(data["update fail"])
        } else alert("修改成功")
      })
      .catch((e) => {
        console.log(e)
      })
  }
  handleDel () {
    fetch("http://localhost/sql_proc.php?f=del", {
      method: "POST",
      body: JSON.stringify(this.state.data),
      headers: new Headers(),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if (data["status"] == "fail") {
          alert(data["del fail"])
        } else alert("刪除成功")
      })
      .catch((e) => {
        console.log(e)
      })
  }
  handleChange (event) {
    this.setState({ name: event.target.value })
  }
  handleName (field, e) {
    var new_data = this.state.data
    new_data[field] = e.target.value
    this.setState({ data: new_data })
  }
  render () {
    const { classes } = this.props
    return (
      <form className={classes.root} noValidate autoComplete="off">
        <FormControl>
          <InputLabel htmlFor="component-simple">學號</InputLabel>
          <Input
            id="component-simple"
            value={this.state.data["stu_id"]}
            onChange={(e) => this.handleName("stu_id", e)}
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="component-helper">姓名</InputLabel>
          <Input
            id="component-helper"
            value={this.state.data["name"]}
            onChange={(e) => this.handleName("name", e)}
            aria-describedby="component-helper-text"
          />
          <FormHelperText id="component-helper-text">
            請輸入中文姓名
          </FormHelperText>
        </FormControl>
        <br />
        <FormLabel component="legend">性別</FormLabel>
        <RadioGroup
          aria-label="gender"
          name="gender"
          value={this.state.data["gender"]}
          onChange={(e) => this.handleName("gender", e)}
        >
          <FormControlLabel value="0" control={<Radio />} label="女" />
          <FormControlLabel value="1" control={<Radio />} label="男" />
          <FormControlLabel value="2" control={<Radio />} label="其他" />
        </RadioGroup>

        <FormControl variant="outlined">
          <InputLabel htmlFor="component-outlined">國文</InputLabel>
          <OutlinedInput
            id="component-outlined"
            value={this.state.data["chi"]}
            onChange={(e) => this.handleName("chi", e)}
            label="Name"
          />
        </FormControl>
        <FormControl variant="outlined">
          <InputLabel htmlFor="component-outlined">英文</InputLabel>
          <OutlinedInput
            id="component-outlined"
            value={this.state.data["eng"]}
            onChange={(e) => this.handleName("eng", e)}
            label="Name"
          />
        </FormControl>
        <FormControl variant="outlined">
          <InputLabel htmlFor="component-outlined">數學</InputLabel>
          <OutlinedInput
            id="component-outlined"
            value={this.state.data["math"]}
            onChange={(e) => this.handleName("math", e)}
            label="Name"
          />
        </FormControl>
        <div className={classes.root}>
          <Button variant="contained" onClick={this.handleIns}>
            新 增
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={this.handleQuery}
          >
            查 詢
          </Button>
          <Button variant="contained" color="primary" onClick={this.handleMod}>
            修 改
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={this.handleDel}
          >
            刪 除
          </Button>
        </div>
      </form>
    )
  }
}

export default withStyles(useStyles)(App)
