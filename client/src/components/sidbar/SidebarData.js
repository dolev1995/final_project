import React from 'react'
import { Link } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import GradeIcon from '@mui/icons-material/Grade';
export const SidebarData =[
    // {
    //     title: "Home",
    //     icon: <HomeIcon />,
    //     link: "/Home"
    // },
 
    {
        title: "כניסה למבחנים",
        icon: <QuestionAnswerIcon />,
        link: "/Class"
    },
    {
        title: "ציוני מבחנים",
        icon: <GradeIcon />,
        link: "/Grade"
    },
    {
        title: "פרופיל אישי",
        icon: <AccountBoxIcon />,
        link: "/Profile"
    },
]
