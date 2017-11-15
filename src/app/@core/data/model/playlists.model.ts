
// {  
//     "fields":{  
//        "recommendations":{  
//           "name":"I've got more for you.",
//           "type":"list",
//           "items":[  
//              {  
//                 "type":"list",
//                 "title":"This is electronica",
//                 "card_token":"49271ee24d",
//                 "items":[  
//                    {  
//                       "duration":229,
//                       "album":{  
//                          "image":"http://artwork-cdn.7static.com/static/img/sleeveart/00/046/670/0004667067_800.jpg",
//                          "artist":{  
//                             "image":"http://artwork-cdn.7static.com/static/img/artistimages/00/010/648/0001064803_300.jpg",
//                             "card_token":"1064803",
//                             "name":"Jellyshoes",
//                             "id":"1064803",
//                             "type":"music_artist"
//                          },
//                          "card_token":"4667067",
//                          "name":"Chill Electronica",
//                          "id":"4667067",
//                          "type":"music_album"
//                       },
//                       "card_token":"47475994",
//                       "name":"Weightless Sunrise",
//                       "id":"47475994",
//                       "type":"music_track",
//                       "stream_url":"http://iamplus-music-api-dev.herokuapp.com/stream_url?track_id=47475994"
//                    }
//                 ]
//              }
//           ]
//        }
//     },
//     "intent":"proactive_recommendations"
//  }

export class Playlists {
    fields?: Fields;
    intent?: string;
}

class Fields {
    recommendations?: Recommendations;
}
  
class Recommendations {
    type?: string;
    name?: string;
    items?: Items[];
}
  
class Items {
    type?: string;
    title?: string;
    card_token?: string;
    items?: Tracks[];
}

class Tracks {
    name?: string;
    type?: string;
    stream_url?: string;
    duration?: number;
    album?: Album;
}

class Album {
    image?: string;
}