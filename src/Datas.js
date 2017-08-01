import React,{Component } from 'react';
import './simditor.css';
import './App.css';
import $ from 'jquery';
import Simditor from 'simditor';

//数据管理
class App extends Component {
    constructor(){
        super()
        this.state={
                nav:['首页',
                      '学校概况',
                      '联系我们',
                      '师资队伍',
                      '人才培养',
                      '学术研究',
                      '校内新闻']
        }
    }
    componentDidMount(){
        // $('#msg').html($('#myEditor').val());
        //   $.ajax({
        //     type:'post',
        //     url:'http://localhost:3000/img',
        //     success:function (x) {
        //         console.log(x);
        //         // this.setState({talents:Array.of(x)});
        //     }.bind(this)
        //   });
         this.editor=new Simditor({
                textarea:$('#myEditor'),
                placeholder: '这里输入文字...',
                upload : {
                    url: 'http://localhost:3000/img', //文件上传的接口地址
                    //键值对,指定文件上传接口的额外参数,上传的时候随文件一起提交
                    // params: {'filename':'versions' },
                    fileKey: 'file', //服务器端获取文件数据的参数名
                    connectionCount: 3,
                    leaveConfirm: '正在上传文件',
                },
                emoji:{   imagePath: 'public//images'    },
               tabIndent: true,
                pasteImage:true,
                markdown: true,
                codeLanguages:[ { name: 'HTML,XML', value: 'html' },
                                { name: 'JSON', value: 'json' },
                                { name: 'CSS', value: 'css' },
                                { name: 'JavaScript', value: 'js' }],
            });
        // this.editor.on('valuechanged', (e, src)=> alert('simditor valuechanged'));
          this.editor.on('selectionchanged', (e, src)=>
               $('#hh').css({background:'red'}));

    }

    handleClick(){
           this.editor.on('selectionchanged', (e, src)=> $('#hh').css({background:'lime'}));
           this.editor.on('pasting', function(e, $pasteContent) {
             if($pasteContent){  console.log($pasteContent)  }
            });
            console.log($('#myEditor').val());

    }


    render() {
        return (<div>
            <h1 id="hh">Simditor</h1>
            <textarea id="myEditor">
            </textarea>
            <button onClick={this.handleClick.bind(this)}>获取内容</button>
            <div id="msg"></div>
        </div>)
    }
};

export default App;










