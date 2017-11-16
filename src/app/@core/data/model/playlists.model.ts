
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
import { Fields } from './fields.model';

export class Playlists {
    fields?: Fields;
    intent?: string;
}