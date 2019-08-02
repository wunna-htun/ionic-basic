import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PARAMETERS } from '@angular/core/src/util/decorators';
import { RecipesService } from '../recipes.service';
import { Recipes } from '../recipes.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recipes-detials',
  templateUrl: './recipes-detials.page.html',
  styleUrls: ['./recipes-detials.page.scss'],
})
export class RecipesDetialsPage implements OnInit {

  loadRecipe: Recipes;
  constructor(private activatedRoute: ActivatedRoute,private recipeService : RecipesService,
    private router: Router,private altController:AlertController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('recipeId')){
        return
      }
      const recipeId=paramMap.get('recipeId');
      this.loadRecipe=this.recipeService.getRecipe(recipeId)
      console.log(this.recipeService.getRecipe(recipeId))


       
    })
  }

  onDelete(){
    console.log("deleted data")
    this.altController.create({
      header:"are you sure to delete",
      message:"message ",
      buttons:[{
        text:'Cancel',
        role:'cancel'
      },
      {
        text:'detele',
        handler:()=>{
          this.recipeService.deleteRecipe(this.loadRecipe.id)
          this.router.navigate(['./Recipes'])
        }
      }
    ]
    }).then(altE=>{
      altE.present()
    })
    



  }

}
