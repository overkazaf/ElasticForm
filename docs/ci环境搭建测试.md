#CI环境搭建测试
- VPS上搭建gitlab环境
- 搭建jenkins环境
- 使用docker
- 自动发布测试

-------------------------
##VPS上搭建gitlab环境
http://www.tuicool.com/articles/iaEB7by

1. 安装依赖包 
   * ```yum install gcc* libicu* -y```
   * ```yum install git ruby go redis nodejs gitlab mysql-server -y```
   > useradd -d /opt/git git     
   > chmod 755 /opt/git
   > su - git
   > git clone https://gitlab.com/larryli/gitlab.git -b 8-0-zh gitlab
   > cd gitlab/
   > cp config/gitlab.yml.example config/gitlab.yml
   > cp config/secrets.yml.example config/secrets.yml
   > cp config/unicorn.rb.example config/unicorn.rb
   > cp config/initializers/rack_attack.rb.example config/initializers/rack_attack.rb
   > cp config/resque.yml.example config/resque.yml
   > cp config/database.yml.mysql config/database.yml
   > mkdir /opt/git/gitlab-satellites/


注意， gem在vps上可能会安装失败， 手动下个最新版本的再make install就好了

