<template>
	<div>
		<!--limit:最大上传数，on-exceed：超过最大上传数量时的操作  on-change:上传成功和失败都会执行-->
		<el-upload
		    class="upload-demo"
		    action=""
		    :on-change="handleChange"
		    :on-remove="handleRemove"
		    :on-exceed="handleExceed"
		    :limit="limitUpload"
		    accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel"
		    :auto-upload="false">
  	<el-button style='margin-left: 20px;'>上传文件<i class="el-icon-upload el-icon--right"></i></el-button>
    <br><br>
		</el-upload>
 <el-alert
    title="注意此处只能上传 xlsx / xls 类型的文件"
    type="warning"
    show-icon>
  </el-alert>
    <br>
		<!-- 数据展示 -->
		  <el-main>
        <el-button  @click="handlePush">录入数据库<i class="el-icon-upload el-icon--right"></i></el-button>
		      <el-table
          ref='multipleTable'
          :data="da"
          style='width:100%'
          @selection-change="handleSelectionChange">
          <el-table-column
              type="selection"
              width="55">
            </el-table-column>
		        <el-table-column
              prop="year"
              label="学年"
              sortable
              width="120">
            </el-table-column>
            <el-table-column
              prop="term"
              sortable
              label="学期"
              width="120">
            </el-table-column>
            <el-table-column
              prop="cno"
              sortable
              label="课程代号"
              width="120">
            </el-table-column>
            <el-table-column
              prop="classname"
              sortable
              label="课程名"
              width="120">
            </el-table-column>
            <el-table-column
              prop="point"
              sortable
              label="学分"
              width="120">
            </el-table-column>
            <el-table-column
              prop="score"
              sortable
              label="成绩"
              width="120">
            </el-table-column>
            <el-table-column
              prop="jidian"
              sortable
              label="绩点"
              width="120">
            </el-table-column>
            <el-table-column
              prop="sno"
              sortable
              label="学号"
              width="120">
            </el-table-column>
            <el-table-column
              prop="name"
              sortable
              label="姓名"
              width="120">
            </el-table-column>
            <el-table-column
              prop="college"
              sortable
              label="学院"
              width="180">
            </el-table-column>
            <el-table-column
              prop="pro"
              sortable
              label="专业"
              width="180">
            </el-table-column>
            <el-table-column
              prop="class"
              sortable
              label="班级"
              width="120">
            </el-table-column>
		      </el-table>
		    </el-main>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				limitUpload:1,
				fileTemp:null,
        file:null,
				da:[],
        dalen:0,
        multipleSelection: [],
			};
		},
		methods:{
			// 添加文件和上传成功和失败都会执行该文件
			handleChange(file, fileList){
				console.log("handleChangec参数：",file);
			    this.fileTemp = file.raw; //获取上传文件的头部的信息
			    if(this.fileTemp){ //判断头部是不是为空
			        if((this.fileTemp.type == 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
			            || (this.fileTemp.type == 'application/vnd.ms-excel')){ //判断头部是否符合设置
			            this.importfxx(this.fileTemp); //调用文件上传方法
			        } else { //文件格式不对时，提示信息
			            this.$message({
			                type:'warning',
			                message:'附件格式错误，请删除后重新上传！'
			            })
			        }
			    } else { //文件头部是空
			        this.$message({
			            type:'warning',
			            message:'请上传附件！'
			        })
			    }
			},
			//超出文件最大的数量，有关参数limitUpload
			handleExceed(){
			    this.$message({
			        type:'warning',
			        message:'超出最大上传文件数量的限制！'
			    })
			    return;
			},
			//文件移除时的钩子
			handleRemove(file,fileList){
			    this.fileTemp = null
			},
			//文件上传方法
			importfxx(obj) {
			    let _this = this; //声明一个变量指向Vue实例this，保证作用域一致,_this只是一个变量名，this代表父函数，如果在子函数还用this，this的指向就变成子函数了，_this就是用来存储指向的。
			    let inputDOM = this.$refs.inputer; //通过ref绑定的组件，直接访问demo，减少消耗。
			    // 通过DOM取文件数据

			    this.file = event.currentTarget.files[0];

			    var rABS = false; //是否将文件读取为二进制字符串
			    var f = this.file; //将父类的file，赋值给f

			    var reader = new FileReader();

			    FileReader.prototype.readAsBinaryString = function(f) {
			        var binary = "";
			        var rABS = false; //是否将文件读取为二进制字符串
			        var pt = this;
			        var wb; //读取完成,转换后数据
			        var outdata;//用来存储原始数据
			        var reader = new FileReader();
					//读取文件readAsBinaryString，会触发一个load时间，使用reader.onload对该事件进行处理
			        reader.onload = function(e) {
						//reader.result:返回文件的内容,只有读取操作后，该属性才能生效
			            var bytes = new Uint8Array(reader.result); // Uint8Array: 8位无符号整数，长度1个字节
			            var length = bytes.byteLength;
			            for (var i = 0; i < length; i++) {
			                binary += String.fromCharCode(bytes[i]); //返回由指定的 UTF-16 代码单元序列创建的字符串
			            }
			            var XLSX = require("xlsx");
			            if (rABS) {
			                wb = XLSX.read(btoa(fixdata(binary)), {
			                //手动转化
			                type: "base64"
			                });
			            } else {
			                wb = XLSX.read(binary, {
			                type: "binary"
			                });
			            }
			            outdata = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]); //outdata就是你想要的东西
			            console.log('未处理的原始数据如下：');
			            console.log(outdata);
			            //此处可对数据进行处理
			            let arr = [];
						// outdata.map将outdata中的数据循环并且放置在arr中进行输出
			            outdata.map(v => {
			                let obj = {}
			                obj.year = v['year']
			                obj.term = v['term']
			                obj.cno = v['cno']
			                obj.classname = v['classname']
                      obj.point = v['point']
                      obj.score = v['score']
                      obj.jidian = v['jidian']
                      obj.sno = v['sno']
                      obj.name = v['name']
                      obj.college = v['college']
                      obj.pro = v['pro']
                      obj.class = v['class']
			                arr.push(obj)
			            });
			            _this.da=arr;
			            _this.dalen=arr.length;
			            return arr;
			        };
			        reader.readAsArrayBuffer(f);
			    };
			    if (rABS) {
			        reader.readAsArrayBuffer(f);
			    } else {
			        reader.readAsBinaryString(f);
			    }
      },
      //多选或者选中某一行，通过调取接口完成成绩上传
      handleSelectionChange(val) {
        this.multipleSelection = val;
        console.log(val,'多选测试')
      },
      //调取接口传入数据库
      handlePush() {
          //调取接口将数据存入数据库,参数为multileSelection

      }


		}

	}
</script>
