'use client'
const FTTSenderP = () => {
  const newWindow = window.open(
    "https://fttsenderp.web.app",
    "_blank",
    "width=300,height=300"
  );
  if (newWindow) {
    newWindow.focus();
  }
}
const GitHub = () => {
  const newWindow = window.open(
    "https://github.com",
    "_blank",
    "width=1500,height=1000"
  );
  if (newWindow) {
    newWindow.focus();
  }
}
const Notion = () => {
  const newWindow = window.open(
    "https://www.notion.so",
    "_blank",
    "width=1500,height=1000"
  );
  if (newWindow) {
    newWindow.focus();
  }
}
const Trello = () => {
  const newWindow = window.open(
    "http://trello.com",
    "_blank",
    "width=1500,height=1000"
  );
  if (newWindow) {
    newWindow.focus();
  }
}
const Live = () => {
  const newWindow = window.open(
    "http://outlook.live.com/",
    "_blank",
    "width=1500,height=1000"
  );
  if (newWindow) {
    newWindow.focus();
  }
}
const Office = () => {
  const newWindow = window.open(
    "http://outlook.office.com/mail/",
    "_blank",
    "width=1500,height=1000"
  );
  if (newWindow) {
    newWindow.focus();
  }
}

const Jira = () => {
  const newWindow = window.open(
    "https://dhanav.atlassian.net/jira/core/projects/AK/board",
    "_blank",
    "width=1500,height=1000"
  );
  if (newWindow) {
    newWindow.focus();
  }
}


import Clock from 'react-live-clock';
import './styles.css';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-between">   
      <div className="relative flex place-items-center">
        <div className="flex flex-row mt-5 text-2xl bg-green-700 border-2 text-white border-green-700">
          <div className="flex-auto px-7 py-2">
            Alert
          </div>
          <div className="flex-auto w-128 py-2 bg-white text-green-700">
            <div class="relative flex overflow-x-hidden">
              <div><p className='mx-4'>Active - Internal Use</p></div>
            </div>            
          </div>
        </div>
      </div>      
      <div className="relative flex flex-col place-items-center">
        <div className='flex text-4xl mb-1'>Bangkok : Current time</div>
        <div className="flex text-7xl mb-2">
          <Clock format={'HH:mm:ss'} ticking={true} timezone={'Asia/Bangkok'} />          
        </div>        
        <div className="flex-col m-2 ">
          <a 
            href=""
            onClick={Jira}                      
            className="flex flex-col bg-white my-2 px-4 py-2 text-sm font-medium border-2 btn-active underline-thickness-1 hover:underline text-green-700 border-green-700 hover:bg-green-700 hover:text-[#F2F2F2] cursor-pointer transition-colors duration-300">            
            <div className="text-xl">Jira</div>
            <div className="text-md">assign your projects here</div>
          </a>
          <a onClick={GitHub} className="flex flex-col bg-white my-2 px-4 py-2 text-sm font-medium border-2 btn-active underline-thickness-1 hover:underline text-green-700 border-green-700 hover:bg-green-700 hover:text-[#F2F2F2] cursor-pointer transition-colors duration-300">
            <div className="text-xl">GitHub</div>
            <div className="text-md">push/pull more repos here</div>
          </a>          
          <a onClick={Notion} className="flex flex-col bg-white my-2 px-4 py-2 text-sm font-medium border-2 btn-active underline-thickness-1 hover:underline text-green-700 border-green-700 hover:bg-green-700 hover:text-[#F2F2F2] cursor-pointer transition-colors duration-300">
            <div className="text-xl">Notion</div>
            <div className="text-md">see your project plans here</div>
          </a>
          <a onClick={Trello} className="flex flex-col bg-white my-2 px-4 py-2 text-sm font-medium border-2 btn-active underline-thickness-1 hover:underline text-green-700 border-green-700 hover:bg-green-700 hover:text-[#F2F2F2] cursor-pointer transition-colors duration-300">
            <div className="text-xl">Trello</div>
            <div className="text-md">manage Tasks via Trello</div>
          </a>
          <div className="flex flex-row">
            <a onClick={Live} className="flex flex-col bg-white my-2 mr-2 px-4 py-2 text-sm font-medium border-2 btn-active underline-thickness-1 hover:underline text-green-700 border-green-700 hover:bg-green-700 hover:text-[#F2F2F2] cursor-pointer transition-colors duration-300">
              <div className="text-xl">Outlook.live</div>
              <div className="text-md">個人用</div>
            </a>
            <a onClick={Office} className="flex flex-col bg-white my-2 ml-2 px-4 py-2 text-sm font-medium border-2 btn-active underline-thickness-1 hover:underline text-green-700 border-green-700 hover:bg-green-700 hover:text-[#F2F2F2] cursor-pointer transition-colors duration-300">
              <div className="text-xl">Outlook.office</div>
              <div className="text-md">ビジネス</div>
            </a>
          </div>
          
        </div>
      </div>
      <div className="relative flex place-items-center mb-5 text-lg">
        <a href='https://dhanav.me/' target='_blank' className='hover:underline underline-thickness-1'>Dhanav.me</a>
      </div>
    </main>
  );
}
