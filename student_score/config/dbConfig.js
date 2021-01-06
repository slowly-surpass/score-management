//文件配置，数据库信息
const config = {
    // 启动端口
    port: 8080,
    // 数据库配置
    database: {
        DATABASE: 'student_score',
        USERNAME: 'root',
        PASSWORD: '',
        PORT: '3306',
        HOST: 'localhost',
        insecureAuth : true,
        useConnectionPooling: true
    }
}
 
module.exports = config