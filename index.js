const express=require('express')
const app=express()
const cors=require('cors')
app.use(cors())

app.get('/', (req, res) => {
    const today = new Date();
    const daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  
    const slackName = req.query.slack_name;
    const track = req.query.track;
  
    const utcTime = new Date(Date.now()).toISOString();
  
    const githubFileUrl = `https://github.com/username/repo/blob/main/file_name.ext`;
    const githubRepoUrl = `https://github.com/username/repo`;
  
    const response = {
      'slack_name': slackName,
      'current_day': daysOfTheWeek[today.getDay()],
      'utc_time': utcTime,
      'track': track,
      'github_file_url': githubFileUrl,
      'github_repo_url': githubRepoUrl,
      'status_code': 200
    };
  
    res.json(response);
  })
app.listen(3000,()=>console.log('connected'))