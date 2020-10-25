const dogs = require('../models/dogs');

class DogsController {
  async postDoggo(ctx, _) {
    const data = ctx.request.body;
    console.log(`Insert into DB: ${JSON.stringify(data)}`);
    await dogs.create({
      name: data.name,
      image: data.image,
      age: data.age,
      description: data.description
    })
    ctx.status = 201;
  }

  async getDoggos(ctx, _) {
    const data = await dogs.find();
    console.log('being called')
    ctx.body = data;
    ctx.status = 200;
  }

  //updating two dogs wtf lol?
  async updateDoggos(ctx) {
    const data = ctx.request.body;
    console.log(data);
    await dogs.findOneAndUpdate({name: data.name}, {name: data.updatedName}, (error, data) => {
      if (error) console.log(error);
      else console.log(data);
    });
    ctx.status = 200;
  }

  async deleteDoggo (ctx) { // why would u delete a doggo? heartless
    const data = ctx.request.body;
    console.log(data);
    await dogs.findOneAndDelete({name: data.name}, () => {
      console.log(`Deleted data`)
    })
    ctx.status = 200;
  }
}

module.exports = DogsController