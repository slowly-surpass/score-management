//文件配置，数据库信息
const config = {
    // 启动端口
    port: 8080,
    // 数据库配置
    database: {
        DATABASE: 'student_score',
        USERNAME: 'admin',
        PASSWORD: 'PLhyh7j0VGSgNprRgad3',
        PORT: '3306',
        HOST: '8.131.98.159',
        insecureAuth : true,
        useConnectionPooling: true
    }
}
 
module.exports = config