// ngrok config add-authtoken 2NpQHOwehoEqyvp8Tj68mEc5mdD_5WrM8muREm23HVfaFJoWd

//ngrok authtoken 2NpQHOwehoEqyvp8Tj68mEc5mdD_5WrM8muREm23HVfaFJoWd

ngrok http 8000 .host-header="localhost:8000"

http://localhost:8000/apis/Universities
http://127.0.0.1:8000/apis/UniversityCourses/
http://127.0.0.1:8000/apis/AllProjects/

ngrok.exe http 8000


// ngrok authtoken 2O1F02jyI5HIxPCpoLJq7fhgLBW_4VfCbCEqnubzti9GAUxeX