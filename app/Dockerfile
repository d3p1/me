##
# @description Blog image
# @author      Cristian Marcelo de Picciotto <d3p1@d3p1.dev>
##

##
# @note Create a build stage to build the blog
# @note It is used Jekyll to implement the blog
# @link https://jekyllrb.com/
# @link https://hub.docker.com/r/jekyll/jekyll/
##
FROM jekyll/minimal:4.0 AS build
    ##
    # @note The Jekyll official image only has the `root` user 
    #       as an available shell user. 
    #       There is a `jekyll`user but it does not have shell access.
    #       I think that it is necessary to re-create this `jekyll` user 
    #       to be able to work/access site code without using the `root` user
    # @link https://github.com/envygeeks/jekyll-docker/blob/master/repos/jekyll/Dockerfile#L148
    ##
    ARG USER_UID=1000
    ARG USER_GID=$USER_UID
    RUN deluser jekyll
    RUN groupadd --gid ${USER_GID} jekyll
    RUN useradd --uid ${USER_UID} --gid ${USER_GID} -m jekyll
    USER ${USER_UID}:${USER_GID}

    ##
    # @note Set working directory and copy related files to build blog
    # @note It is always a good practice to use as a working directory 
    #       the same directory that contains the service code
    #       to avoid path issues if we need to mount the root of the project
    # @note We are going to copy the `Gemfile` and `Gemfile.lock` first 
    #       to cache them.
    #       If `Gemfile` and `Gemfile.lock` are modified, then the layer 
    #       is invalidated and `bundle install` will be executed
    # @note Add `BUILD_MODE` argument to customize Jekyll build process 
    #       (and builded image) by environment
    ##
    ARG BUILD_MODE=development
    WORKDIR /srv/jekyll/app
    COPY --chown=${USER_UID}:${USER_GID} Gemfile ./
    COPY --chown=${USER_UID}:${USER_GID} Gemfile.lock ./
    RUN bundle install
    COPY --chown=${USER_UID}:${USER_GID} . ./
    RUN JEKYLL_ENV=${BUILD_MODE} bundle exec jekyll build --config _config.yml,_config.env.yml

##
# @note Create a deploy stage to deploy the blog
# @note It is used Alpine because we only need the static generated files 
#       from the build stage
##
FROM alpine:3.18.2 AS deploy 
    COPY --from=build /srv/jekyll/app/_site /app