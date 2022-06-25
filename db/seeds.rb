# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


vehicles = Vehicle.create([
    {
        vin: "KM8JN72DX7U587496",
        make:"Hyundai",
        model: "Tuscon",
        color: "White",
        likes: 0,
        mileage: 123673,
        price: 6500,
        image_url: "https://cars.usnews.com/pics/size/350x262/images/Auto/izmo/286581/2007_hyundai_tucson_angularfront.jpg",
    },
    {
        vin: "4T1BB3EK3AU115504",
        make:"Toyota",
        model: "Camry",
        color: "Green",
        likes: 0,
        mileage: 154694,
        price: 7500,
        image_url: "https://cdcssl.ibsrv.net/autodata/images/?IMG=CAC10TOC201A0801.JPG&WIDTH=380",
    },
    {
        vin: "5J6TF3H36FL006639",
        make:"Honda",
        model: "Civic",
        color: "Blue",
        likes: 0,
        mileage: 23657,
        price: 43567,
        image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Honda_Civic_Type_R_%28FK%3B_France%29_front_view.jpg/1200px-Honda_Civic_Type_R_%28FK%3B_France%29_front_view.jpg",
    },
    {
        vin: "WVWNA63BXXE050629",
        make:"Volkswagen",
        model: "Tiguan",
        color: "Gray",
        likes: 0,
        mileage: 56267,
        price: 28657,
        image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/2018_Volkswagen_Tiguan_R-Line_TSi_BlueMotion_4Motion_2.0_Front.jpg/1200px-2018_Volkswagen_Tiguan_R-Line_TSi_BlueMotion_4Motion_2.0_Front.jpg",
    },
    {
        vin: "SCCLMDSC4CHA10277",
        make:"Lotus",
        model: "Evora",
        color: "Orange",
        likes: 0,
        mileage: 14332,
        price: 95673,
        image_url: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT3L8UKyiawr9NdqkYsPvFaITvU07A6y4nEKqX4IxiVitjGjojz",
    },
    {
        vin: "4S3BH6454Y7301500",
        make:"Subaru",
        model: "WRX STI",
        color: "Blue",
        likes: 0,
        mileage: 75242,
        price: 25845,
        image_url: "https://cdn.motor1.com/images/mgl/MQPEn/s1/subaru-wrx-sti-ej20-final-edition.webp",
    },
    

])

comments = Comment.create([
    {
       submitter: "Dave",
       body: "Why would anyone buy this",
       vehicle: vehicles.first
    },
    {
       submitter: "Randy",
       body: "I would LOVE to own this",
       vehicle: vehicles.first
    }
])
