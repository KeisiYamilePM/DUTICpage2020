import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
//import {MatExpansionModule} from '@angular/material/expansion';

import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
//import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        FooterComponent,
    ],
    imports: [
        BrowserAnimationsModule,
        NgbModule,
        FormsModule,
        RouterModule,
        AppRoutingModule,
        ComponentsModule,      
        MatTooltipModule,  
        HttpClientModule,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        MatStepperModule,
        //MatExpansionModule,
       // NgxExtendedPdfViewerModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
