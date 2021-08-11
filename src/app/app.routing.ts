import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';

import { NewsComponent } from './components/virtualteaching/news/news.component';
import { SubjectDesignComponent } from './components/virtualteaching/subject-design/subject-design.component';

import { TeachersComponent } from './components/videosresources/teachers/teachers.component';
import { StudentsComponent } from './components/videosresources/students/students.component';
import { ToolsgoogleComponent } from './components/videosresources/toolsgoogle/toolsgoogle.component';
import { VirtuallearningComponent } from './components/virtuallearning/virtuallearning.component';
import { TrainingsComponent } from './components/trainings/trainings.component';
import { TrainingStudentsComponent } from './components/trainings/training-students/training-students.component';
import { NewsContentComponent } from './components/virtualteaching/news-content/news-content.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { NewsContentLearnComponent } from './components/virtuallearning/news-content-learn/news-content-learn.component';
import { InnovaticComponent } from './components/innovatic/innovatic.component';
import { VideoconferencesComponent } from './components/workshopOnline/videoconferences/videoconferences.component';
import { CulturalsiteComponent} from './components/culturalsite/culturalsite.component';
import { CuriositiesComponent} from './components/culturalsite/curiosities/curiosities.component';
import { LibraryComponent} from './components/culturalsite/library/library.component';
import { ActivitiesComponent } from './components/activities/activities.component';
import { DigitalArtComponent } from './components/activities/digital-art/digital-art.component';
import { GamesComponent } from './components/activities/games/games.component';
import { KnowledgeComponent } from './components/activities/knowledge/knowledge.component';


const routes: Routes =[
    { path: '', redirectTo: 'homepage', pathMatch: 'full' },
    { path: 'homepage',     component: ComponentsComponent },

    { path: 'virtualTeaching/news',     component: NewsComponent },
    { path: 'virtualTeaching/subjectDesign',     component: SubjectDesignComponent },

    { path: 'virtualLearning',     component: VirtuallearningComponent },
    { path: 'videoconferences',     component: VideoconferencesComponent },

    { path: 'videoandresources/teachers',     component: TeachersComponent },
    { path: 'videoandresources/students',     component: StudentsComponent },
    { path: 'videoandresources/googletools',     component: ToolsgoogleComponent },

    { path: 'virtualTeaching/trainings',     component: TrainingsComponent },
    { path: 'virtualLearning/trainings',     component: TrainingStudentsComponent },

    { path: 'virtualTeaching/news/content',     component: NewsContentComponent },
    { path: 'virtualLearning/news/content',     component: NewsContentLearnComponent },

    { path: 'news/newsletter',     component: NewsletterComponent },

    { path: 'EPEITE',     component: InnovaticComponent },

    { path: 'paradero-cultural', component: CulturalsiteComponent},
    { path: 'paradero-cultural/curiosidades', component: CuriositiesComponent},
    { path: 'paradero-cultural/biblioteca', component: LibraryComponent},

    { path: 'dutic-activities', component: ActivitiesComponent},
    { path: 'dutic-activities/digital-art', component: DigitalArtComponent},
    { path: 'dutic-activities/games', component: GamesComponent},
    { path: 'dutic-activities/knowledge', component: KnowledgeComponent},

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
