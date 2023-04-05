-- CreateTable
CREATE TABLE "Users" (
    "userid" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("userid")
);

-- CreateTable
CREATE TABLE "Media" (
    "mediaid" TEXT NOT NULL,
    "medianame" TEXT NOT NULL,
    "overview" TEXT NOT NULL,
    "posterpath" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "price" INTEGER NOT NULL DEFAULT 5000,
    "Userid" TEXT NOT NULL,
    "mediaTypeTypeid" TEXT NOT NULL,
    "genreGenreid" TEXT NOT NULL,
    "originOriginid" TEXT NOT NULL,

    CONSTRAINT "Media_pkey" PRIMARY KEY ("mediaid")
);

-- CreateTable
CREATE TABLE "MediaType" (
    "typeid" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "MediaType_pkey" PRIMARY KEY ("typeid")
);

-- CreateTable
CREATE TABLE "Genre" (
    "genreid" TEXT NOT NULL,
    "genre" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Genre_pkey" PRIMARY KEY ("genreid")
);

-- CreateTable
CREATE TABLE "Origin" (
    "originid" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "language" TEXT NOT NULL,

    CONSTRAINT "Origin_pkey" PRIMARY KEY ("originid")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");

-- AddForeignKey
ALTER TABLE "Media" ADD CONSTRAINT "Media_Userid_fkey" FOREIGN KEY ("Userid") REFERENCES "Users"("userid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Media" ADD CONSTRAINT "Media_mediaTypeTypeid_fkey" FOREIGN KEY ("mediaTypeTypeid") REFERENCES "MediaType"("typeid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Media" ADD CONSTRAINT "Media_genreGenreid_fkey" FOREIGN KEY ("genreGenreid") REFERENCES "Genre"("genreid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Media" ADD CONSTRAINT "Media_originOriginid_fkey" FOREIGN KEY ("originOriginid") REFERENCES "Origin"("originid") ON DELETE RESTRICT ON UPDATE CASCADE;
