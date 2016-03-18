// @flow

//// Type Aliases /////////////////////////////////////////////////////
type Tweet = { message: string, is_awesome: boolean};
var print_tweet = function (data: Tweet) {
  console.log(data.message);
}
var sample_data = { mesage: 'Hello World!', is_awesome: false };
print_tweet(sample_data);
