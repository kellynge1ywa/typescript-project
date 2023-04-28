interface habbits{
    id:number,
    name:string,
    startDate:Date,
    image:string
}

class habbits{

    async myhabits(){
        const response= await fetch(" http://localhost:3000/habit");

        const habits=await response.json() as habbits[];

        let html=''
        habits.forEach(habit=>{
            html+=
            `
             <div class="container">
                <div class="habit">
                    <h2 class="habitName">${habit.name}</h2>
                    <p class="startDate">${habit.startDate}</p>

                 </div>
            
            </div>
  
            `

        })

        const myHabit=document.querySelector("#myHabit")! as HTMLDivElement;
        myHabit.innerHTML=html;

        
        

    }

}

new habbits().myhabits()