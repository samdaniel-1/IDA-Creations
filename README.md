# If you deploying from any hosting then read here

  # Server
  Deploy server firstly, because you'll get the URL for server first and if you face any problem with deployment of server like did'nt get the database connected message that is supposed to be "MongoDB connected successfully".
  Then you use your own MongoDB URI. For that when you deploy, in the environmental variables add "URL" as key and your URI as value. If you need to add port, then in the environmental variables add "PORT" as key.
  # Client
  With the server's URL, when you are deploying client, add that URL to the Environmental variables with "REACT_APP_URL" as key and that server URL as value. After that remove the "/"(Slash) from the URL's last part because it is already defined in string, if you did'nt do that it will be like double slashes ("//"). 
  # See the admin pages
    if You wanted to see the admin page make slight changes in URL like in the url add "/admin/read". I did'nt give admin path because it will no good to have admin panel in user interface

# Repository usages

  # server => Backend
  # client => Frontend

# My Deployment

You can check this out i deployed frontend in Vercel and backend in Render.com

https://ida-creations-nu.vercel.app/

        Thanking You!!!
