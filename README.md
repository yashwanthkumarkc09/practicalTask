# practicalTask 
download the project and navigate to project folder 
open the command prompt from the folder path and run npm i command ( angular cli should be installed )
after that run npm install pm2 -g for golbal installation
once npm i is completed
run the below commands:
pm2 start server.js to run the application in fork mode with one process
pm2 start server.js -i <number of process> for running application in cluster mode with multiple  process(Option to configure number processes and a shared port number)
for Example : pm2 start server.js -i 4
pm2 start server.js --watch (Automatic reload process on exception)
pm2 logs (Centralised log manager with PID’s)
pm2 monit (Monitoring CPU, Memory usage)
pm2 delete 0 for deleting the process with id
pm2 show <app-name | id> for more details
for example pm2 show 0 
pm2 stop 0 to stop process 
pm2 restart 0 to reload process
