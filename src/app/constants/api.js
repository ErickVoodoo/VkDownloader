const ACCESS_TOKEN = '64f11409bba298feec0a2e6e45b7fec572777af48c060027d3c1e215fee3ef1db839577dbf71b795edb39';

export const vkSearchGroups = (search) =>
  `https://api.vk.com/method/groups.search?q=${search}&access_token=${ACCESS_TOKEN}&count=100`;

export const vkGetPosts = () => '';
