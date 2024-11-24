import dotenv from "dotenv";
import { app } from './app.js';
import { CronJob } from "cron";

dotenv.config({
	path: './.env'
})



app.get('/', (req, res) => {
	res.send('Hello World!')
})

app.listen(process.env.PORT || 8000, () => {
	console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
})

app.post('/send-email', async (req, res) => {
	res.send('Email sent successfully');
})







