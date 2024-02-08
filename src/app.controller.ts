import { Controller, Get } from "@nestjs/common";

@Controller("")
export class AppController{
    @Get()
    getRootRoute(){
        return "Hello World";
    }
    @Get("/about")
    getAboutUs(){
        return  "This is about us page"
    }
}