# coding
Modify the file encoding format
   
##描述  
  
批量修改文件编码格式，例如：GBK转UTF8   

支持嵌套路径，他会将文件夹路径下的所有目录都操作    

    
##实例    

git clone https://github.com/baixuexiyang/coding.git    

查看html文件夹下的内容，会出现乱码    

执行node code.js   

再次查看就正常了   
    
##应用            

修改code.js中的变量对应自己文件   

root_path : 需要进行转码的文件路径    
file_type : 需要进行转码的文件格式，比如html文件   
from_code : 文件的编码   
to_code   : 文件的目标编码   

执行node code.js       