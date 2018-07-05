FROM node:10.5.0-alpine

# added this step to prevent angular.json not found error
WORKDIR /usr/src

COPY . .

# replace ng serve with ng serve --host 0.0.0.0 so that it serves outside
# install jq for json edit
RUN apk update \
	&& apk add jq
	
# replace package.json
RUN input_json="package.json" \
	&& tmp_json="tmp.json" \
	&& jq '.scripts.start = "ng serve --host 0.0.0.0"' $input_json > $tmp_json \
	&& mv $tmp_json $input_json
	
# remove jq
RUN apk del jq

RUN npm install
RUN npm audit fix
# running this a second time does seem to fix another vuln.
RUN npm audit fix
# this sometimes do get fixed beforehand
RUN npm update ws --depth 4

EXPOSE 4200

CMD ["npm", "start"]