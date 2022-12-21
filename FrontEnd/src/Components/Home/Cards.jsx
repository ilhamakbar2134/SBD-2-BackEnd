import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from '@material-tailwind/react';

function Cards(props) {
  const products = props.propsData;

  return (
    <div className="mx-auto my-8 flex flex-wrap justify-center sm:w-2/3 md:w-11/12">
      {products.map((card) => {
        return (
          <Card
            className="mx-auto mb-5 w-96 bg-slate-100 p-3 shadow-2xl"
            key={card.title}
          >
            <CardHeader color="blue" className="relative mb-3 h-56 p-5">
              <img
                src={card.image}
                alt="img-blur-shadow"
                className="h-full w-full"
              />
            </CardHeader>
            <CardBody className="text-center">
              <Typography variant="h5" className="p-2">
                {card.title}
              </Typography>
              <Typography className="p-5">{card.description}</Typography>
            </CardBody>
            <CardFooter
              divider
              className="flex items-center justify-between px-5 py-3"
            >
              <Typography variant="small">{card.left}</Typography>
              <Typography
                variant="small"
                color="gray"
                className="flex gap-1 px-5"
              >
                {card.right}
              </Typography>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
}

export default Cards;
