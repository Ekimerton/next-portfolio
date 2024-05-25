---
title: 'Enhancing Your 10X Portfolio with Shadcn'
description: 'Learn how to utilize Shadcn components to improve the design and accessibility of your 10X Portfolio.'
keywords: 'Shadcn, React components, 10X Portfolio, UI design, accessible design'
author: {name: 'Ekim Karabey', imageUrl: "/images/pfp.png", handle: "@ekimerton", url: "https://www.twitter.com/ekimerton"}
date: 'April 15th, 2024'
---

Shadcn is an excellent choice for enhancing your 10X Portfolio due to its ease of use, visually appealing components, and strong focus on accessibility. This post will guide you through how the 10X Portfolio utilizes Shadcn and how you can add more components to your project.

## Why Shadcn?

When building a portfolio, it's crucial to have components that are not only easy to implement but also look great and are accessible to all users. Shadcn fits these criteria perfectly:

- **Ease of Use**: Shadcn components are straightforward to integrate, allowing you to quickly build and customize your UI.
- **Aesthetic Appeal**: The components come with a polished design out of the box, enhancing the visual appeal of your portfolio.
- **Accessibility**: Shadcn emphasizes accessibility, ensuring that your portfolio is usable by a wider audience, including those with disabilities.

## How This Project Uses Shadcn

In the 10X Portfolio, Shadcn has already been initialized, and its components are ready to use. You can find Shadcn components in the `/next-portfolio/src/app/components/ui` directory. For instance, `button.jsx` is an example of a Shadcn component.

### Example: Using a Shadcn Button

To see Shadcn in action, you can check out the `button.jsx` component. Here’s how you might use it in your project:

```javascript
// In your component file
import { Button } from '@/app/components/ui/button';

function ExampleComponent() {
  return <Button variant="primary">Click Me</Button>;
}

export default ExampleComponent;
```

## Adding More Shadcn Components

Adding more components from Shadcn to your project is simple. Follow these steps:

1. **Browse Available Components**: Visit the [Shadcn documentation](https://shadcn.com/docs) to explore the available components.
2. **Customize and Use**: Customize the component as needed and add it to your project:
   ```javascript
  import { Card, CardHeader, CardBody } from 'shadcn';

  function CustomCard() {
    return (
      <Card>
        <CardHeader>Title</CardHeader>
        <CardBody>Content goes here...</CardBody>
      </Card>
    );
  }

  export default CustomCard;
   ```

## Conclusion

Shadcn’s combination of ease of use, appealing design, and commitment to accessibility makes it an ideal choice for enhancing your 10X Portfolio. By utilizing Shadcn components, you can ensure that your portfolio not only looks great but is also accessible to a broad audience. 

Explore the Shadcn documentation to find more components that can enrich your portfolio and keep building impressive, user-friendly projects.
