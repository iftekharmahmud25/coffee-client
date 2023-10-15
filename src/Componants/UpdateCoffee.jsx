import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";







const UpdateCoffee = () => {


    const coffee = useLoaderData()
    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;
     

    const handleUpdateCoffee = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const updatedCoffee = { name, quantity, supplier, taste, category, details, photo };
        console.log(updatedCoffee);
  
      // send data to server
       
           fetch(`http://localhost:5000/coffee/${_id}`,{
               method : 'PUT',
               headers : {
                  'content-type' : 'application/json'
               },
               body : JSON.stringify(updatedCoffee)
           })
           .then(res => res.json())
           .then(data => {
               console.log(data)
  
               if(data.modifiedCount > 0){
                Swal .fire({
                  title: 'Success!',
                  text: 'Coffee Updated  succeussfully !!',
                  icon: 'success',
                  confirmButtonText: 'Cool'
                })
  
               }
               
           })
  
  
  
      };



    return (
         <div className="bg-pink-500 p-6 md:p-24"> {/* Decreased padding for small screens */}
        <h1 className="text-3xl text-center mb-4 md:mb-8 font-bold">Update  A Coffee {name}</h1>
        <form onSubmit={handleUpdateCoffee}>
          {/* form name and quantity row */}
          <div className="lg:flex flex-row">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Coffee Name</span>
              </label>
              <label className="input-group">
                <input type="text" name="name" defaultValue={name} placeholder="Coffee Name" className="input input-bordered w-full" />
              </label>
            </div>
  
            <div className="form-control md:w-1/2 ml-2 md:ml-4"> {/* Adjusted margin for small screens */}
              <label className="label">
                <span className="label-text">Available Quantity</span>
              </label>
              <label className="input-group">
                <input type="text" name="quantity" defaultValue={quantity}  placeholder="Available Quantity" className="input input-bordered w-full" />
              </label>
            </div>
          </div>
  
          {/* form supplier row */}
          <div className="md:flex"> {/* Adjusted margin for small screens */}
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Supplier Name</span>
              </label>
              <label className="input-group">
                <input type="text" name="supplier" defaultValue={supplier}  placeholder="Supplier Name" className="input input-bordered w-full" />
              </label>
            </div>
  
            <div className="form-control md:w-1/2 ml-2 md:ml-4"> {/* Adjusted margin for small screens */}
              <label className="label">
                <span className="label-text">Taste</span>
              </label>
              <label className="input-group">
                <input type="text" name="taste" placeholder="Taste" defaultValue={taste}  className="input input-bordered w-full" />
              </label>
            </div>
          </div>
  
          {/* form category and details row */}
          <div className="md:flex"> {/* Adjusted margin for small screens */}
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <label className="input-group">
                <input type="text" name="category" placeholder="Category" defaultValue={category}  className="input input-bordered w-full" />
              </label>
            </div>
  
            <div className="form-control md:w-1/2 ml-2 md:ml-4"> {/* Adjusted margin for small screens */}
              <label className="label">
                <span className="label-text">Details</span>
              </label>
              <label className="input-group">
                <input type="text" name="details" placeholder="Details" defaultValue={details}  className="input input-bordered w-full" />
              </label>
            </div>
          </div>
  
          <div className="form-control md:w-full">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <label className="input-group">
              <input type="text" name="photo" placeholder="Photo URL" defaultValue={photo}  className="input input-bordered w-full" />
            </label>
          </div>
          <input type="submit" value="Update Coffee" className="btn btn-block mt-4 hover:bg-green-400" />
        </form>
      </div>
    );
};

export default UpdateCoffee;