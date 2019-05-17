/*
 * 설정 파일
 *
 * @date 2016-11-10
 * @author Mike
 */

/*


 file주소는 route_lodaer 기준


*/
module.exports = {
	server_port: 3000,
	db_url: 'mongodb+srv://thswlrud:0000@cluster0-0cez1.mongodb.net/test?retryWrites=true',
	db_schemas: [
	    {file:'./user_schema', collection:'user2', schemaName:'UserSchema', modelName:'UserModel'}
	],
	route_info: [
	    //===== User =====//
	    {file:'./user', path:'/process/login', method:'login', type:'post'}					// user.login 
	    ,{file:'./user', path:'/process/adduser', method:'adduser', type:'post'}				// user.adduser 
	    ,{file:'./user', path:'/process/listuser', method:'listuser', type:'post'}			// user.listuser 
        
	    //===== Test =====//
	    ,{file:'./test', path:'/process/test1', method:'test1', type:'post'}
	]
}