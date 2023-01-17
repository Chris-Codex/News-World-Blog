const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [4, 3]
    });

    if (!result.canceled) {
        setImage(result.uri)
    }
}

const uploadImage = async () => {
    try {
        if (!image) {
            return
        }

        const response = await fetch(image);
        const blob = await response.blob();

        const ref = storage().ref().child("images/" + uid + '/' + Date.now())

        return ref.put(blob)
    } catch (error) {
        console.warn("UPLOAD ERROR", error)
    }
}

{/* <View className="flex-row px-4">
                    <TouchableOpacity onPress={pickImage} className="w-[230px] h-[50px] bg-[#cde0e63b] mt-6 items-center justify-center mx-1">
                        <Text>Select Image</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={uploadImage} className="w-[110px] h-[50px] bg-[#cde0e63b] mt-6 items-center justify-center">
                        <Text>Upload Image</Text>
                    </TouchableOpacity>
                </View>
                {image && <Image source={{ uri: image }} className="w-[200px] h-[200px]" />}
                <Text> {image}</Text> */}
