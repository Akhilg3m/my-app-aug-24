
ANGULAR: Angualr is framework to build single page applicatoins.


        Framework: combination of languages and libraries

            html, css, js, ts, rxjs, zone.js


        SPA: Only one html page, 
             view will change based on the user activity


    SETUP:
    ------
    1) download install node js

        check: node -v
               npm -v

    2) install angular from npm

        npm install -g @angular/cli@15

        check:  ng version

    3) create new porject and open it in brower

        ng new my-app


    PERMISSIONS:
    ------------

        1. open powershell as administrator and run

            set-executionPolicy unrestricted

    
    Angular Project Heirarchy:
    -------------------------


    Angular Concepts:
    -----------------


    ROUTING: Helps us to navigate from one view to another view
    --------

    implementtaition:
    -----------------
        1) Configure rotues in app-routing.module.ts
        2) create router-outlet in app.component.html


    4 types of routes
    -----------------

    1) General route: 
    -----------------
        {path:'login', component:LoginComponent}

    2) Empty route:
    ----------------
         {path:'', component:LoginComponent}

    3) WildCard route / fallback route:
    -----------------------------------

         {path:'**', component:PageNotFoundComonent}


    4) Children route:
    ------------------

         {path:'dashboard', component:DashboardComponent, children:[
            {path:'home',component:HomeComponent},
            {path:'welcome', component:WelcomeComponent},
            {path:'',component:WelcomeComponent}
        ]},


        cofigure router-outlet in dashboard right section





    ANGULAR ARCHITECTURE:
    =====================



    DIRECTIVES:  Useful to alter the DOM
    ===========

        1) Structural Directives
        2) Attrivute Directives
        3) COmponent Directives

        1) Structural Directives: Alters DOM Structure
        -------------------------

            *ngFor


            *ngIf

        2) Attribute Directives: Chnages the attrivute values dynamically
        -----------------------

            ngStyle

            ngClass

        3) Component Directives: add new elments to the dom
        ------------------------

            all components are directives


    PIPES: alter the content from one format to another format
    ------



STEPS:
======

1) import httpclientmodule

2) injecct httpclient service

3) getVehciles emtod

4) subscribe in ts


ALL POSSIBLE API CALLS:
=======================

1) all          get        get( URL )

2) filtering    get        get( URL?filter=XXXX )

3) sorting      get        get( URL?sortBy=color&order=asc )   asc or desc

4) pagination   get        get( URL?limit=10&page=1 )

5) specific     get        get( URL/id )

6) create       post       post( URL, data )

7) update       put        put( URL/id, data )

8) delete       delete     delete( URL/id )







GIT:
----

    1) laptop <-> website
    =====================

        git config --global user.name "XXXXXXX"
        git config --global user.email "XXXXXXX"

        check:  git config --list
        ------


    2) Project  <-> Repository
    ===========================

        git init
        git remote add origin URL

        check: git remote -v
        ------


    3) Code Sync 
    =============

        git add .                       (changes -> staged changes)
        git commit -m "XXXXXXXXX"       (staged changes -> zero)
        git push                        (100%,  commit in github)



REACTIVE FORMS:
===============

    1) FormGroup
    2) NestedFormGroup
    3) Dynamic Forms
    4) FormArray
    5) FormValidations


    ts:
    ====
        age: new FormControl('', [Validators.required, Validatros.minLength])

    html:
    =====

        <div *ngIf="CONTROL?.touched && CONTROL?.invalid">

            <p class="error" *ngIf="CONTROL?.errors?.['required']">Age is required</p>
            <p class="error" *ngIf="CONTROL?.errors?.['min']">Minimum 18 years.</p>
            <p class="error" *ngIf="CONTROL?.errors?.['max']">Maximum 60 years.</p>

        </div>

        CONTROL:
        ========

            fromGroup:       userForm.get('age')

            nestedFormGroup  userForm.get('address')?.get('pincode')

            formArray:       cardsFormArray.controls[i]?.get('cvv')





    Component Communication:
    ========================

        1) parent to child
        2) child to parent
        3) sibling communication



    MODUULE COMMUNICATION:
    ======================
    
    1) Eager Loading:
    -----------------

        -> Create a feature module  (ng g m XXXXXXXXXX)
        -> Import that feature module in app module

    2) Lazy Loading
    ----------------

        -> Create module with rougint module  (ng g m XXX  --routing=true)
    
        -> create lazy loading path

                {
                    path: 'payments',
                    loadChildren: () => import('./payments/payments.module').then(m => m.PaymentsModule)
                }

    3) Pre Loading
    --------------

        Downloading lazy loading modue immediatly after download the eager module.

        RouterModule.forRoot(routes, {preloadingStrategy:PreloadAllModules})























