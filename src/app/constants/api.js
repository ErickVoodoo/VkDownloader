const ACCESS_TOKEN = '64f11409bba298feec0a2e6e45b7fec572777af48c060027d3c1e215fee3ef1db839577dbf71b795edb39';
const ACCESS_TOKEN_WORK = '2b45a20bec82ad870ef33b160e2bc45f633474fbcffbd9863859d0a968b9fb6b4ed82f31a39afc25e9dba';

export const vkSearchGroups = (search) =>
  `https://api.vk.com/method/groups.search?q=${search}&access_token=${ACCESS_TOKEN_WORK}&count=100`;

export const vkGetGroups = (ids) =>
  `https://api.vk.com/method/groups.getById?group_ids=${ids}&access_token=${ACCESS_TOKEN_WORK}`;

export const vkGetPosts = (id) =>
 `https://api.vk.com/method/wall.get?owner_id=${Math.sign(-1) * id}&access_token=${ACCESS_TOKEN_WORK}&count=50`;
