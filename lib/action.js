"use server";

export async function shareMeal(formData) {
  // use server is used to create server actions
  // a functions guarenteed to execute on server

  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  console.log(meal);
}
