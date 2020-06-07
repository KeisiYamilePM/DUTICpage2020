import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { RouterModule } from '@angular/router';

import { BasicelementsComponent } from './basicelements/basicelements.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TypographyComponent } from './typography/typography.component';
import { NucleoiconsComponent } from './nucleoicons/nucleoicons.component';
import { ComponentsComponent } from './components.component';
import { NotificationComponent } from './notification/notification.component';
import { NgbdModalBasic } from './modal/modal.component';
import { TvunsaComponent } from './workshopOnline/tvunsa/tvunsa.component';
import { VideoconferencesComponent } from './workshopOnline/videoconferences/videoconferences.component';
import { TeachersComponent } from './videosresources/teachers/teachers.component';
import { StudentsComponent } from './videosresources/students/students.component';
import { ToolsgoogleComponent } from './videosresources/toolsgoogle/toolsgoogle.component';
import { NewsComponent } from './virtualteaching/news/news.component';
import { SubjectDesignComponent } from './virtualteaching/subject-design/subject-design.component';

@NgModule({
    declarations: [
        ComponentsComponent,
        BasicelementsComponent,
        NavigationComponent,
        TypographyComponent,
        NucleoiconsComponent,
        NotificationComponent,
        NgbdModalBasic,
        TvunsaComponent,
        VideoconferencesComponent,
        TeachersComponent,
        StudentsComponent,
        ToolsgoogleComponent,
        NewsComponent,
        SubjectDesignComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        NouisliderModule,
        RouterModule,
        JwBootstrapSwitchNg2Module
    ],
    exports:[ ComponentsComponent ]
})
export class ComponentsModule { }
