# README

Please make sure you are using ruby version 3.0.1

Setup this app by running the following commands in your terminal

#### Clone the directory in your local system

```
git clone https://github.com/jay-chouhan1904/jay-referral.git
cd jay-referral

```

#### Run bundle install and database creations and migrations

```
bundle install
rails db:create
rails db:migrate
```

#### You can run the server and open http://localhost:3000/ in your browser

```
rails s

```

## Important Note

#### To check the emails in development I have used [mailcatcher](https://mailcatcher.me/)

Run the following commands then head on over to http://127.0.0.1:1080/ in your browser to see the sent mails

```
gem install mailcatcher
mailcatcher
```
