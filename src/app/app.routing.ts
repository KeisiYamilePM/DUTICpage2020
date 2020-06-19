import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { LandingComponent } from './examples/landing/landing.component';
import { LoginComponent } from './examples/login/login.component';
import { ProfileComponent } from './examples/profile/profile.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { NewsComponent } from './components/virtualteaching/news/news.component';
import { SubjectDesignComponent } from './components/virtualteaching/subject-design/subject-design.component';
import { TvunsaComponent } from './components/workshopOnline/tvunsa/tvunsa.component';
import { VideoconferencesComponent } from './components/workshopOnline/videoconferences/videoconferences.component';
import { TeachersComponent } from './components/videosresources/teachers/teachers.component';
import { StudentsComponent } from './components/videosresources/students/students.component';
import { ToolsgoogleComponent } from './components/videosresources/toolsgoogle/toolsgoogle.component';
import { VirtuallearningComponent } from './components/virtuallearning/virtuallearning.component';

const routes: Routes =[
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'index',                component: ComponentsComponent },
    { path: 'nucleoicons',          component: NucleoiconsComponent },
    { path: 'examples/landing',     component: LandingComponent },
    { path: 'examples/login',       component: LoginComponent },
    { path: 'examples/profile',     component: ProfileComponent },

    { path: 'virtualTeaching/news',     component: NewsComponent },
    { path: 'virtualTeaching/subjectDesign',     component: SubjectDesignComponent },

    { path: 'virtualLearning',     component: VirtuallearningComponent },

    { path: 'workshopOnline/tvunsa',     component: TvunsaComponent },
    { path: 'videoconferences',     component: VideoconferencesComponent },

    { path: 'videoandresources/teachers',     component: TeachersComponent },
    { path: 'videoandresources/students',     component: StudentsComponent },
    { path: 'videoandresources/googletools',     component: ToolsgoogleComponent },

];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes, {useHash:true})
    ],
    exports: [
    ],
})
export class AppRoutingModule { }
