# If you deploying from any hosting then read here

  # Server
  Deploy server firstly, because you'll get the URL for server first and if you face any problem with deployment of server like did'nt get the database connected message that is supposed to be "MongoDB connected successfully".
  Then you use your own MongoDB URI. For that when you deploy, in the environmental variables add "URL" as key and your URI as value. If you need to add port, then in the environmental variables add "PORT as key.
  # Client
  With the server's URL, when you are deploying client, add that URL to the Environmental variables with "REACT_APP_URL" as key and that server URL as value. 

# Repository usages

  # server => Backend
  # client => Frontend
